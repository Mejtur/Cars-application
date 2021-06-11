using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using CarWebApi.Models;

namespace CarWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CarsController : ApiController
    {
        private Carcontext db = new Carcontext();

        // GET: api/Cars
        public IQueryable<Cars> GetCars()
        {
            return db.Cars;
        }

        // GET: api/Cars/5
        [ResponseType(typeof(Cars))]
        public IHttpActionResult GetCars(int id)
        {
            Cars cars = db.Cars.Find(id);
            if (cars == null)
            {
                return NotFound();
            }

            return Ok(cars);
        }

        // PUT: api/Cars/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCars(int id, Cars cars)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cars.carid)
            {
                return BadRequest();
            }

            db.Entry(cars).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Cars
        [ResponseType(typeof(Cars))]
        public IHttpActionResult PostCars(Cars cars)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Cars.Add(cars);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cars.carid }, cars);
        }

        [ResponseType(typeof(Cars))]
        public IHttpActionResult GetCar(string carbrand)
        {
            Cars car = db.Cars.FirstOrDefault(u => u.carbrand == carbrand);
            if (car == null)
            {
                return NotFound();
            }
            return Ok(car);
        }

        // DELETE: api/Cars/5
        [ResponseType(typeof(Cars))]
        public IHttpActionResult DeleteCars(int id)
        {
            Cars cars = db.Cars.Find(id);
            if (cars == null)
            {
                return NotFound();
            }

            db.Cars.Remove(cars);
            db.SaveChanges();

            return Ok(cars);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarsExists(int id)
        {
            return db.Cars.Count(e => e.carid == id) > 0;
        }
    }
}