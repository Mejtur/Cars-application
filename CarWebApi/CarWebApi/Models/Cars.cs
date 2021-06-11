using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CarWebApi.Models
{
    public class Cars
    {
        [Key]
        public int carid { get; set; }
        public string carbrand { get; set; }
        public string carmodel { get; set; }
        public string carplate { get; set; }
        public string rentdate { get; set; }
    }
}