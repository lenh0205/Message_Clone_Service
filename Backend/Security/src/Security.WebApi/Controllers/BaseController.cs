using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Security.WebApi.Controllers;

[ApiController]
public class BaseController : ControllerBase {
    protected readonly IMediator _mediator;

    public BaseController(IServiceProvider serviceProvider) {
        _mediator = serviceProvider.GetRequiredService<IMediator>();
    }
}
