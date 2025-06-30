using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class PaymentToCreateDto
    {
         public DateTime Date { get; set; }
        public string? CheckNumber { get; set; }
        public decimal PaymentAmount { get; set; }
        public decimal DepositAmount { get; set; }
        public string? Notes { get; set; }
        public string? Mode { get; set; }
        public int VendorId { get; set; }
        public int ProjectId { get; set; }
        public int CorporationId { get; set; }
        public string? Attachment { get; set; } 
    }
}