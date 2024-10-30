using Security.Application;
using Security.Infrastructure;
using Security.Identity.Api;
using Security.Identity.ConfigurationOptions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var services = builder.Services;
var configuration = builder.Configuration;

services.AddApplicationDependencies();
services.AddInfrastructureDependencies(builder.Configuration);
services.AddPresentationDependencies();

var app = builder.Build();
var appSettings = new AppSettings();
configuration.Bind(appSettings);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
    app.Map("/", () => Results.Redirect("/swagger"));
    app.UseSwagger();
    app.UseSwaggerUI();
} 

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
