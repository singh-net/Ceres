using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Payment
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string? CheckNumber { get; set; }
        public decimal PaymentAmount { get; set; }
        public decimal DepositAmount { get; set; }
        public string? Notes { get; set; }
        public string? Mode { get; set; }
        public int VendorId { get; set; }
        public required Vendor Vendor { get; set; }
        public int ProjectId { get; set; }
        public Project? Project { get; set; }
        public int CorporationId { get; set; }
        public required Corporation Corporation { get; set; }
        public string? Attachment { get; set; } // Assuming this is a file path or URL
    }
}