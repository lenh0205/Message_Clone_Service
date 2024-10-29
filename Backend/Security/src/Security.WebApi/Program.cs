using Security.Application;
using Security.Infrastructure;
using Security.Persistence;
using Security.WebApi;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddApplicationDependencies();
builder.Services.AddInfrastructureDependencies(builder.Configuration);
builder.Services.AddPersistenceDependencies(builder.Configuration);
builder.Services.AddPresentationDependencies();

var app = builder.Build();

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
