using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class PaymentToReturnDto
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string? CheckNumber { get; set; }
        public decimal PaymentAmount { get; set; }
        public decimal DepositAmount { get; set; }
        public string? Notes { get; set; }
        public string? Mode { get; set; }
        public string? VendorName { get; set; }
        public string? ProjectName { get; set; }
        public string? CorporationName { get; set; }
        public string? Attachment { get; set; } // Assuming this is a file path or URL
    }
}