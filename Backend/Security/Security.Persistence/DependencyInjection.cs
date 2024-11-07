using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Security.Application.Common.Interfaces;

namespace Security.Persistence {
    public static class DependencyInjection {
        public static IServiceCollection AddPersistenceDependencies(this IServiceCollection services, IConfiguration configuration) {
            var defaultConnection = configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<ApplicationDbContext>(options => {
                options.UseSqlServer(defaultConnection);
            });

            services.AddScoped<IApplicationDbContext>(provider => provider.GetRequiredService<ApplicationDbContext>());
            return services;
        }
    }
}
