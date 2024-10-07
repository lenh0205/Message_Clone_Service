namespace Security.WebApi {
    public static class DependencyInjection {
        public static IServiceCollection AddWebServices(this IServiceCollection services) {
            services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            services.AddAuthentication();
            services.AddAuthorization();

            return services;
        }
    }
}
