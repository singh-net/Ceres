using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Vendor
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Address { get; set; }
        public decimal Balance { get; set; }
    }
}