using Microsoft.EntityFrameworkCore;
using Security.Application.Common.Interfaces;
using System.Reflection;

namespace Security.Infrastructure.Data {
    public class ApplicationDbContext : DbContext, IApplicationDbContext {
        public ApplicationDbContext(DbContextOptions options) : base(options) {
        }
        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder) {
            base.ConfigureConventions(configurationBuilder);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            base.OnConfiguring(optionsBuilder);
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.UseSqlServer("Server=tcp:tranphatfreelancer.database.windows.net,1433;Initial Catalog=firstDatabase;Persist Security Info=False;User ID=tranphatfreelancer;Password={};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
