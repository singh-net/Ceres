using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class PaymentsController : BaseApiController
    {
        private readonly DataContext _context;
        public PaymentsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payment>>> GetPayments()
        {
            return await _context.Payments
                .Include(p => p.Corporation)
                .Include(p => p.Project)
                .Include(p => p.Vendor)
                .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Payment>> GetPayment(int id)
        {
            var payment = await _context.Payments
                .Include(p => p.Corporation)
                .Include(p => p.Project)
                .Include(p => p.Vendor)
                .FirstOrDefaultAsync(p => p.Id == id);
            return payment == null ? NotFound() : payment;
        }

    }
}