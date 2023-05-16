import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	Any: any;
	ISO8601: any;
};

export type AuthenticateInput = {
	createIfNotExists?: InputMaybe<Scalars['Boolean']>;
	emailPassword: EmailPasswordInput;
};

export type AuthenticateResponse = {
	__typename?: 'AuthenticateResponse';
	identityCreated: Scalars['Boolean'];
	token: Scalars['String'];
};

export type CreatePostAuthorInput = {
	id: Scalars['ID'];
};

export type CreatePostInput = {
	author: CreatePostAuthorInput;
	body: Scalars['String'];
};

export type CreateProfileInput = {
	username: Scalars['String'];
};

export type DeleteResponse = {
	__typename?: 'DeleteResponse';
	success: Scalars['Boolean'];
};

export type EmailPasswordInput = {
	email: Scalars['String'];
	password: Scalars['String'];
};

export type Follow = {
	__typename?: 'Follow';
	createdAt: Timestamp;
	from: Profile;
	fromId: Scalars['ID'];
	id: Scalars['ID'];
	to: Profile;
	toId: Scalars['ID'];
	updatedAt: Timestamp;
};

export type FollowConnection = {
	__typename?: 'FollowConnection';
	edges: Array<FollowEdge>;
	pageInfo: PageInfo;
};

export type FollowEdge = {
	__typename?: 'FollowEdge';
	node: Follow;
};

export type FollowFromInput = {
	id: Scalars['ID'];
};

export type FollowInput = {
	from: FollowFromInput;
	to: FollowToInput;
};

export type FollowToInput = {
	id: Scalars['ID'];
};

export type FollowersInput = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	where: FollowersWhere;
};

export type FollowersWhere = {
	toId: IdQueryInput;
};

export type FollowsInput = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	where: FollowsWhere;
};

export type FollowsWhere = {
	fromId: IdQueryInput;
};

export type IdQueryInput = {
	equals?: InputMaybe<Scalars['ID']>;
	notEquals?: InputMaybe<Scalars['ID']>;
	oneOf?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Identity = {
	__typename?: 'Identity';
	createdAt: Timestamp;
	createdBy?: Maybe<Scalars['String']>;
	email?: Maybe<Scalars['String']>;
	externalId?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	updatedAt: Timestamp;
};

export type Like = {
	__typename?: 'Like';
	createdAt: Timestamp;
	id: Scalars['ID'];
	post: Post;
	postId: Scalars['ID'];
	profile: Profile;
	profileId: Scalars['ID'];
	updatedAt: Timestamp;
};

export type LikeConnection = {
	__typename?: 'LikeConnection';
	edges: Array<LikeEdge>;
	pageInfo: PageInfo;
};

export type LikeEdge = {
	__typename?: 'LikeEdge';
	node: Like;
};

export type LikePostInput = {
	post: LikePostPostInput;
	profile: LikePostProfileInput;
};

export type LikePostPostInput = {
	id: Scalars['ID'];
};

export type LikePostProfileInput = {
	id: Scalars['ID'];
};

export type Mutation = {
	__typename?: 'Mutation';
	authenticate?: Maybe<AuthenticateResponse>;
	createPost: Post;
	createProfile: Profile;
	follow: Follow;
	likePost: Like;
	requestPasswordReset?: Maybe<RequestPasswordResetResponse>;
	resetPassword?: Maybe<ResetPasswordResponse>;
	unfollow?: Maybe<DeleteResponse>;
	unlikePost?: Maybe<DeleteResponse>;
};

export type MutationAuthenticateArgs = {
	input: AuthenticateInput;
};

export type MutationCreatePostArgs = {
	input: CreatePostInput;
};

export type MutationCreateProfileArgs = {
	input: CreateProfileInput;
};

export type MutationFollowArgs = {
	input: FollowInput;
};

export type MutationLikePostArgs = {
	input: LikePostInput;
};

export type MutationRequestPasswordResetArgs = {
	input: RequestPasswordResetInput;
};

export type MutationResetPasswordArgs = {
	input: ResetPasswordInput;
};

export type MutationUnfollowArgs = {
	input: UnfollowInput;
};

export type MutationUnlikePostArgs = {
	input: UnlikePostInput;
};

export type PageInfo = {
	__typename?: 'PageInfo';
	/** Count of nodes on the current page. */
	count: Scalars['Int'];
	/** The ID cursor of the last node on the current page. */
	endCursor: Scalars['String'];
	/** Whether there are results after the current page. */
	hasNextPage: Scalars['Boolean'];
	/** The ID cursor of the first node on the current page. */
	startCursor: Scalars['String'];
	/** Total count of nodes across all pages. */
	totalCount: Scalars['Int'];
};

export type Post = {
	__typename?: 'Post';
	author: Profile;
	authorId: Scalars['ID'];
	body: Scalars['String'];
	createdAt: Timestamp;
	id: Scalars['ID'];
	updatedAt: Timestamp;
};

export type PostConnection = {
	__typename?: 'PostConnection';
	edges: Array<PostEdge>;
	pageInfo: PageInfo;
};

export type PostEdge = {
	__typename?: 'PostEdge';
	node: Post;
};

export type PostLikesInput = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	where: PostLikesWhere;
};

export type PostLikesWhere = {
	postId: IdQueryInput;
};

export type PostsInput = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	where: PostsWhere;
};

export type PostsWhere = {
	authorId: IdQueryInput;
};

export type Profile = {
	__typename?: 'Profile';
	createdAt: Timestamp;
	id: Scalars['ID'];
	identity: Identity;
	identityId: Scalars['ID'];
	updatedAt: Timestamp;
	username: Scalars['String'];
};

export type ProfileInput = {
	id: Scalars['ID'];
};

export type ProfileLikesInput = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	where: ProfileLikesWhere;
};

export type ProfileLikesWhere = {
	profileId: IdQueryInput;
};

export type Query = {
	__typename?: 'Query';
	_health?: Maybe<Scalars['Boolean']>;
	followers: FollowConnection;
	follows: FollowConnection;
	myProfile?: Maybe<Profile>;
	postLikes: LikeConnection;
	posts: PostConnection;
	profile?: Maybe<Profile>;
	profileLikes: LikeConnection;
	timeline: PostConnection;
};

export type QueryFollowersArgs = {
	input: FollowersInput;
};

export type QueryFollowsArgs = {
	input: FollowsInput;
};

export type QueryPostLikesArgs = {
	input: PostLikesInput;
};

export type QueryPostsArgs = {
	input: PostsInput;
};

export type QueryProfileArgs = {
	input: ProfileInput;
};

export type QueryProfileLikesArgs = {
	input: ProfileLikesInput;
};

export type QueryTimelineArgs = {
	input: TimelineInput;
};

export type RequestPasswordResetInput = {
	email: Scalars['String'];
	redirectUrl: Scalars['String'];
};

export type RequestPasswordResetResponse = {
	__typename?: 'RequestPasswordResetResponse';
	success?: Maybe<Scalars['Boolean']>;
};

export type ResetPasswordInput = {
	password: Scalars['String'];
	token: Scalars['String'];
};

export type ResetPasswordResponse = {
	__typename?: 'ResetPasswordResponse';
	success?: Maybe<Scalars['Boolean']>;
};

export type TimelineInput = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	where: TimelineWhere;
};

export type TimelineWhere = {
	profileId: Scalars['ID'];
};

export type Timestamp = {
	__typename?: 'Timestamp';
	/** Formatted timestamp. Uses standard datetime formats */
	formatted: Scalars['String'];
	fromNow: Scalars['String'];
	/** ISO8601 representation of the timestamp */
	iso8601: Scalars['String'];
	/** Seconds since unix epoch */
	seconds: Scalars['Int'];
};

export type TimestampFormattedArgs = {
	format: Scalars['String'];
};

export type UnfollowInput = {
	fromId: Scalars['ID'];
	toId: Scalars['ID'];
};

export type UnlikePostInput = {
	postId: Scalars['ID'];
	profileId: Scalars['ID'];
};

export type AuthenticateMutationVariables = Exact<{
	input: AuthenticateInput;
}>;

export type AuthenticateMutation = {
	__typename?: 'Mutation';
	authenticate?: {
		__typename?: 'AuthenticateResponse';
		identityCreated: boolean;
		token: string;
	} | null;
};

export const AuthenticateDocument = gql`
	mutation Authenticate($input: AuthenticateInput!) {
		authenticate(input: $input) {
			identityCreated
			token
		}
	}
`;
export type Requester<C = {}, E = unknown> = <R, V>(
	doc: DocumentNode,
	vars?: V,
	options?: C
) => Promise<R> | AsyncIterable<R>;
export function getSdk<C, E>(requester: Requester<C, E>) {
	return {
		Authenticate(
			variables: AuthenticateMutationVariables,
			options?: C
		): Promise<AuthenticateMutation> {
			return requester<AuthenticateMutation, AuthenticateMutationVariables>(
				AuthenticateDocument,
				variables,
				options
			) as Promise<AuthenticateMutation>;
		}
	};
}
export type Sdk = ReturnType<typeof getSdk>;
