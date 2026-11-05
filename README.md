# Auth Flow Showcase

A **React + TypeScript** learning project demonstrating a complete frontend login flow with **mock authentication**. It builds on the [Digital Innovation One React challenge](https://github.com/digitalinnovationone/trilha-react-desafio-4), retaining Create React App while organizing session handling and route behavior.

This is a client-side demonstration: its route guard is not backend authorization.

## What is implemented

- Login validation with React Hook Form and Yup.
- Mock credentials and normalized login behavior in a dedicated service.
- Typed authentication context with initial hydration, error state and login/logout actions.
- `localStorage` persistence and a private-route loading boundary.
- A signed-in home screen and Testing Library coverage for core login/navigation cases.

## Run and verify

```bash
npm ci
npm start
```

Open `http://localhost:3000`. Use the intentionally public **local demo credentials** exported as `AUTH_TEST_CREDENTIALS` in [authService.ts](src/services/auth/authService.ts); they are mock data, not an external account.

```bash
npm run test:ci
npm run build
```

The commands exist in [package.json](package.json). [Login tests](src/pages/Login/index.test.tsx) cover rendering, validation and invalid credentials; [route tests](src/routes/AppRoutes.test.tsx) cover successful login and redirecting an unauthenticated user. Test files establish intended coverage, not a claim that a particular run passed.

## Code tour

1. [authService](src/services/auth/authService.ts) — mock lookup, email normalization, stored-user shape checking and persistence.
2. [AuthContext](src/contexts/AuthContext.tsx) — session state and actions exposed to the UI.
3. [PrivateRoute](src/routes/PrivateRoute.tsx) and [AppRoutes](src/routes/AppRoutes.tsx) — hydration and routing.
4. [Login](src/pages/Login/index.tsx) and [Home](src/pages/Home/index.tsx) — user-facing flow.
5. [renderApp](src/test-utils/renderApp.tsx) — shared provider/router test setup.

## Documented decisions and tradeoffs

The original project notes record these scope decisions:

| Decision | Benefit | Boundary |
| --- | --- | --- |
| Keep authentication mocked | Focuses the exercise on frontend behavior and preserves the challenge base | No server identity verification, secure session lifecycle or refresh-token integration. |
| Put authentication behind a service | Keeps lookup/persistence details out of the context | A real provider still needs a defined API contract and error mapping. |
| Retain localStorage | Makes reload persistence simple and compatible with the original exercise | Browser-editable data is not trusted authorization; a production session design would differ. |
| Retain Create React App | Avoids a toolchain migration unrelated to the challenge | Carries the existing toolchain constraints rather than adopting a new build setup. |

## Next improvements

Add focused tests for logout, valid and corrupted stored sessions, and hydration timing. A real API, server-enforced authorization and a suitable session strategy would be a separate integration step. Shared visual tokens and CI are also documented extension points.

## Attribution

Forked from **Digital Innovation One's `trilha-react-desafio-4`**. This version documents and organizes the mock service, typed context, hydration-aware routing and tests while preserving the learning origin.
