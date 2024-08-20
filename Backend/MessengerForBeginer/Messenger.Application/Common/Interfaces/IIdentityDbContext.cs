namespace Messenger.Application.Common.Interfaces {
    public interface IIdentityDbContext {
        Task<int> SaveChangesAsync(CancellationToken cancellation = default);
    }
}
