

## Plan: Fix About Image, Update Emails, Enable Auto-Confirm Auth

### 1. About Section Image

The `AboutSection.tsx` already imports from `@/assets/gallery/team_collab.jpg`. The file was replaced but the image may not have updated visually due to caching or the binary not being the user's uploaded file. I'll re-import the user-uploaded image directly from user-uploads and save it to the correct asset path, ensuring the file is actually replaced.

### 2. Update All Email Addresses

Replace `info.limitlessglobal@gmail.com` with `info@limitlessconsultancy.co.ke` in:
- `src/components/Footer.tsx` (line 44)
- `src/components/ContactSection.tsx` (line 45)
- `src/pages/Index.tsx` (line 216)

### 3. Enable Auto-Confirm for Signups (Skip Email Verification)

Use the `configure_auth` tool to enable auto-confirm email signups so users get immediate access without email verification.

### 4. Admin Login — Role-Based Redirect

Update `AdminLoginPage.tsx` to check the user's role after login:
- If user has `admin` role → redirect to `/admin/dashboard`
- Otherwise → show appropriate feedback or redirect to home

The current login page already redirects to `/admin/dashboard`, but users without the admin role will see "Failed to load leads" since RLS blocks them. The flow needs to check roles after sign-in.

### Files to Change

| File | Change |
|------|--------|
| `src/assets/gallery/team_collab.jpg` | Replace with user-uploaded image |
| `src/components/Footer.tsx` | Update email |
| `src/components/ContactSection.tsx` | Update email |
| `src/pages/Index.tsx` | Update email |
| Auth config | Enable auto-confirm |
| `src/pages/AdminLoginPage.tsx` | Add role check after login for proper routing |

