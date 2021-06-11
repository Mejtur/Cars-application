using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CarWebApi.Models
{
    public class Users
    {

            [Key]
            public int userid { get; set; }
            public string username { get; set; }
            public string usersurname { get; set; }
        
    }
}