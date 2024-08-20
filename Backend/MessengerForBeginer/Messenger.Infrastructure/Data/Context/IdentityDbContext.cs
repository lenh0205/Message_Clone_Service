using Messenger.Application.Common.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Messenger.Infrastructure.Data.Context {
    public class IdentityDbContext : DbContext, IIdentityDbContext {
        public IdentityDbContext(DbContextOptions options) : base(options) {
        }

        protected IdentityDbContext() {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            base.OnConfiguring(optionsBuilder);
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.UseSqlServer("Server=tcp:tranphatfreelancer.database.windows.net,1433;Initial Catalog=firstDatabase;Persist Security Info=False;User ID=tranphatfreelancer;Password=<password>;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        }

    }
}
