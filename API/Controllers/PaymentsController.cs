using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class PaymentsController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public PaymentsController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaymentToReturnDto>>> GetPayments()
        {
            var payments = await _context.Payments
                .Include(p => p.Corporation)
                .Include(p => p.Project)
                .Include(p => p.Vendor)
                .ToListAsync();
            var paymentDtos = _mapper.Map<IEnumerable<PaymentToReturnDto>>(payments);
            return Ok(paymentDtos);
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


        [HttpPost]
        public async Task<ActionResult<Payment>> CreatePayment(PaymentToCreateDto paymentToCreateDto)
        {
            var payment = _mapper.Map<Payment>(paymentToCreateDto);
            _context.Payments.Add(payment);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPayment), new { id = payment.Id }, payment);
        }

    }
}