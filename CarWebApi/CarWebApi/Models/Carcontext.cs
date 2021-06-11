using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CarWebApi.Models
{
    public class Carcontext : DbContext
    {
        public Carcontext() : base("name=Cars")
        {

        }

        public DbSet<Cars> Cars { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}