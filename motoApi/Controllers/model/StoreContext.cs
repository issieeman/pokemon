using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace motoApi.Model
{
    public class StoreContext:DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options):base(options){}

        public DbSet<Motor> Motors {get;set;}
        public DbSet<Helmet> Helmets {get;set;}
    }
}