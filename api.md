# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">AuthUser</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthSignupResponse</a></code>

Methods:

- <code title="post /auth/login">client.auth.<a href="./src/resources/auth/auth.ts">login</a>({ ...params }) -> AuthLoginResponse</code>
- <code title="post /auth/signup">client.auth.<a href="./src/resources/auth/auth.ts">signup</a>({ ...params }) -> AuthSignupResponse</code>

## Setup

Types:

- <code><a href="./src/resources/auth/setup.ts">SetupCreateResponse</a></code>
- <code><a href="./src/resources/auth/setup.ts">SetupRetrieveResponse</a></code>

Methods:

- <code title="post /auth/setup">client.auth.setup.<a href="./src/resources/auth/setup.ts">create</a>({ ...params }) -> SetupCreateResponse</code>
- <code title="get /auth/setup">client.auth.setup.<a href="./src/resources/auth/setup.ts">retrieve</a>() -> SetupRetrieveResponse</code>

## Email

Types:

- <code><a href="./src/resources/auth/email.ts">EmailSendVerificationResponse</a></code>

Methods:

- <code title="post /auth/email/verify">client.auth.email.<a href="./src/resources/auth/email.ts">sendVerification</a>() -> EmailSendVerificationResponse</code>

# Posts

Types:

- <code><a href="./src/resources/posts.ts">Post</a></code>
- <code><a href="./src/resources/posts.ts">PostCreateResponse</a></code>
- <code><a href="./src/resources/posts.ts">PostListResponse</a></code>
- <code><a href="./src/resources/posts.ts">PostRetrieveBySlugResponse</a></code>

Methods:

- <code title="post /posts">client.posts.<a href="./src/resources/posts.ts">create</a>({ ...params }) -> PostCreateResponse</code>
- <code title="patch /posts">client.posts.<a href="./src/resources/posts.ts">update</a>() -> void</code>
- <code title="post /posts/get">client.posts.<a href="./src/resources/posts.ts">list</a>({ ...params }) -> PostListResponse</code>
- <code title="delete /posts">client.posts.<a href="./src/resources/posts.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /posts/slug">client.posts.<a href="./src/resources/posts.ts">retrieveBySlug</a>({ ...params }) -> PostRetrieveBySlugResponse</code>

# Votes

Types:

- <code><a href="./src/resources/votes.ts">CurrentUserVote</a></code>
- <code><a href="./src/resources/votes.ts">PostVote</a></code>
- <code><a href="./src/resources/votes.ts">VoteAddResponse</a></code>
- <code><a href="./src/resources/votes.ts">VoteRemoveResponse</a></code>

Methods:

- <code title="post /votes">client.votes.<a href="./src/resources/votes.ts">add</a>({ ...params }) -> VoteAddResponse</code>
- <code title="delete /votes">client.votes.<a href="./src/resources/votes.ts">remove</a>({ ...params }) -> VoteRemoveResponse</code>

# Boards

Types:

- <code><a href="./src/resources/boards.ts">Board</a></code>
- <code><a href="./src/resources/boards.ts">BoardListResponse</a></code>

Methods:

- <code title="get /boards">client.boards.<a href="./src/resources/boards.ts">list</a>({ ...params }) -> BoardListResponse</code>

# Roadmaps

Types:

- <code><a href="./src/resources/roadmaps.ts">Roadmap</a></code>
- <code><a href="./src/resources/roadmaps.ts">RoadmapPrivate</a></code>
- <code><a href="./src/resources/roadmaps.ts">RoadmapListResponse</a></code>
- <code><a href="./src/resources/roadmaps.ts">RoadmapRetrieveByURLResponse</a></code>
- <code><a href="./src/resources/roadmaps.ts">RoadmapSearchByNameResponse</a></code>

Methods:

- <code title="get /roadmaps">client.roadmaps.<a href="./src/resources/roadmaps.ts">list</a>({ ...params }) -> RoadmapListResponse</code>
- <code title="get /roadmaps/{url}">client.roadmaps.<a href="./src/resources/roadmaps.ts">retrieveByURL</a>(url) -> RoadmapRetrieveByURLResponse</code>
- <code title="get /roadmaps/search/{name}">client.roadmaps.<a href="./src/resources/roadmaps.ts">searchByName</a>(name) -> RoadmapSearchByNameResponse</code>
