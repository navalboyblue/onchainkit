import type {
  Dispatch,
  HTMLAttributes,
  ImgHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import type { Address, Chain } from "viem";

/**
 * Note: exported as public Type
 */
export type AddressReact = {
  address?: Address | null; // The Ethereum address to render.
  className?: string; // Optional className override for top span element.
  isSliced?: boolean; // Determines if the displayed address should be sliced.
};

/**
 * Note: exported as public Type
 */
export type AvatarReact = {
  address?: Address | null; // The Ethereum address to fetch the avatar for.
  className?: string; // Optional className override for top div element.
  loadingComponent?: JSX.Element; // Optional custom component to display while the avatar data is loading.
  defaultComponent?: JSX.Element; // Optional custom component to display when no ENS name or avatar is available.
  children?: ReactNode; // Optional attestation by passing Badge component as its children
} & ImgHTMLAttributes<HTMLImageElement>; // Optional additional image attributes to apply to the avatar.

/**
 * Note: exported as public Type
 */
export type BadgeReact = {
  className?: string; // Optional className override for top span element.
};

/**
 * Ethereum Attestation Service (EAS) Schema Uid
 * The schema identifier associated with the EAS attestation.
 *
 * Note: exported as public Type
 */
export type EASSchemaUid = `0x${string}`;

/**
 * Ethereum Attestation Service (EAS) Attestation
 * GraphQL response for EAS Attestation
 *
 * Note: exported as public Type
 */
export type Attestation = {
  attester: Address; // the attester who created the attestation.
  decodedDataJson: string; // The attestation data decoded to JSON.
  expirationTime: number; // The Unix timestamp when the attestation expires (0 for no expiration).
  id: string; // The unique identifier of the attestation.
  recipient: Address; // The Ethereum address of the recipient of the attestation.
  revocationTime: number; // The Unix timestamp when the attestation was revoked, if applicable.
  revoked: boolean; // A boolean indicating whether the attestation is revoked or not.
  schemaId: EASSchemaUid; // The schema identifier associated with the attestation.
  time: number; // The Unix timestamp when the attestation was created.
};

/**
 * Ethereum Attestation Service (EAS) Chain Definition
 * The definition of a blockchain chain supported by EAS attestations.
 *
 * Note: exported as public Type
 */
export type EASChainDefinition = {
  easGraphqlAPI: string; // EAS GraphQL API endpoint
  id: number; // blockchain source id
  schemaUids: EASSchemaUid[]; // Array of EAS Schema UIDs
};

/**
 * Note: exported as public Type
 */
export type EthBalanceReact = {
  address?: Address;
  className?: string;
};

/**
 * Attestation Options
 *
 * Note: exported as public Type
 */
export type GetAttestationsOptions = {
  schemas?: EASSchemaUid[];
  revoked?: boolean;
  expirationTime?: number;
  limit?: number;
};

/**
 * Note: exported as public Type
 */
export type GetAvatar = {
  ensName: string; // The ENS name to fetch the avatar for.
};

/**
 * Note: exported as public Type
 */
export type GetAvatarReturnType = string | null;

/**
 * Note: exported as public Type
 */
export type GetName = {
  address: Address;
  chainId?: number;
};

/**
 * Note: exported as public Type
 */
export type GetNameReturnType = string | null;

/**
 * Note: exported as public Type
 */
export type IdentityContextType = {
  address: Address; // The Ethereum address to fetch the avatar and name for.
  schemaId?: Address | null; // The Ethereum address of the schema to use for EAS attestation.
  setAddress: Dispatch<SetStateAction<Address>>;
};

/**
 * Note: exported as public Type
 */
export type IdentityReact = {
  address?: Address; // The Ethereum address to fetch the avatar and name for.
  children: ReactNode;
  className?: string; // Optional className override for top div element.
  schemaId?: Address | null; // The Ethereum address of the schema to use for EAS attestation.
  hasCopyAddressOnClick?: boolean;
};

/**
 * Note: exported as public Type
 */
export type NameReact = {
  address?: Address | null; // Ethereum address to be displayed.
  chain?: Chain;
  children?: ReactNode; // Optional attestation by passing Badge component as its children
  className?: string; // Optional className override for top span element.
} & HTMLAttributes<HTMLSpanElement>; // Optional additional span attributes to apply to the name.

export type UseAttestations = {
  address: Address;
  chain: Chain;
  schemaId: Address | null;
};
