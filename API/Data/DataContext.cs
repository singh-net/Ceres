using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<AppUser> Users { get; set; }

        public DbSet<Corporation> Corporations { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<Payment> Payments { get; set; }

    }
}