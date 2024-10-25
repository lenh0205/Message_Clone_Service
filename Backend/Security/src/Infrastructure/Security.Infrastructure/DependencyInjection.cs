using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Security.Infrastructure {
    public static class DependencyInjection {
        public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration) {


            return services;
        }
    }
}
