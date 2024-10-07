using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Security.WebApi.Controllers;

[ApiController]
public class BaseController(IMediator mediator) : ControllerBase {
    protected readonly IMediator _mediator = mediator;
}
public class Person {
    public string FirstName { get; init; } = string.Empty;
    public string LastName { get; } = string.Empty;
}