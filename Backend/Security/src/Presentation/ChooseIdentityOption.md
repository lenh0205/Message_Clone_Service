# Choosing an Identity Management Solution

## In This Article:
- Basic Identity Management with ASP.NET Core Identity
- When to Consider an OIDC Server
- Handling Disconnected Scenarios
- Deciding Where to Store User Data

Most web applications require authentication to ensure user identity, typically through an access management system. Access management restricts users to authorized areas, safeguarding sensitive information from unauthorized access, such as limiting end-user access to administrative sections. Various identity management solutions for .NET web apps are available, with each tailored to specific requirements.

### Basic Identity Management with ASP.NET Core Identity
ASP.NET Core includes built-in support for identity management through ASP.NET Core Identity, which provides APIs, UI components, and database configuration. Core features include:
- External logins
- Two-factor authentication (2FA)
- Password management
- Account lockout/reactivation
- Authenticator apps

This solution meets many applications’ needs. For further guidance:
- **Introduction to Identity on ASP.NET Core**
- **Tutorial**: Secure a .NET web app with ASP.NET Core Identity.

### When to Consider an OIDC Server
Web applications require state management; without it, users would need to log in repeatedly. Cookies help by storing state within a single domain, but tokens are often more secure and adaptable, especially across domains or apps. OpenID Connect (OIDC) servers issue JSON Web Tokens (JWTs) that are encrypted and signed, offering advantages over cookies but also requiring setup and maintenance.

An OIDC server is beneficial for:
1. **API Security**: Allows secure API calls from different client UIs (SPA, mobile, desktop).
2. **Single Sign-On (SSO)**: Users can authenticate once and access multiple apps seamlessly.

### Handling Disconnected Scenarios
Solutions like Microsoft Entra ID require an internet connection. However, ASP.NET Core Identity and self-hosted OIDC servers are suitable for offline use. Options include:
- Self-hosted or containerized OIDC solutions
- Local authentication service containers

### Deciding Where to Store User Data
Developers must consider the location of user data, especially for compliance. Cloud-based providers like Microsoft Entra ID handle security, data storage, and compliance, while self-hosted solutions offer more control but require maintenance.

### Identity vs. OIDC Server Decision Flow

| Feature               | Self-Host (Infrastructure/Container)                                  | Cloud Solutions                         |
|-----------------------|-----------------------------------------------------------------------|-----------------------------------------|
| **App Integration**   | Libraries or frameworks integrate directly; containers require hand-off | Limited to sign-in flow customization   |
| **Configuration**     | Requires environment setup and identity management configuration      | Web-based UI for configuration          |
| **Customization**     | Highly customizable, often code-based                                | Limited to configuration-based changes  |
| **Maintenance**       | Requires dedicated management for patches and updates                | Provider maintains patches and upgrades |
| **User Credential Storage** | Self-managed data governance                                  | Data storage and compliance managed     |

For more on available identity management options, see **Identity management solutions for ASP.NET Core**.

## Next Steps:
- Learn about JSON Web Tokens
- Explore sample apps with authentication/authorization in ASP.NET Core
- Follow a tutorial on securing .NET web apps with ASP.NET Core Identity
- Learn to protect web APIs.

-- Generate by ChatGPT