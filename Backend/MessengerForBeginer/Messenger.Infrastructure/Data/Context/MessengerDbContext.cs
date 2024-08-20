using Microsoft.EntityFrameworkCore;

namespace Messenger.Infrastructure.Data.Context {
    public class MessengerDbContext : DbContext {
        public MessengerDbContext(DbContextOptions options) : base(options) {
        }

        protected MessengerDbContext() {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            base.OnConfiguring(optionsBuilder);
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.UseMongoDB("mongodb+srv://tranphatfreelancer:<password>@cluster0.niunayu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0","Mongodb");
            }
        }
    }
}
