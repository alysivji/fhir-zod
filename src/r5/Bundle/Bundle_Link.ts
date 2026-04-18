// Profile: http://hl7.org/fhir/StructureDefinition/Bundle
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A series of links that provide context to this bundle. */
export interface Bundle_Link extends BackboneElement {
  /** A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1). */
  relation:
    | "about"
    | "acl"
    | "alternate"
    | "amphtml"
    | "appendix"
    | "apple-touch-icon"
    | "apple-touch-startup-image"
    | "archives"
    | "author"
    | "blocked-by"
    | "bookmark"
    | "canonical"
    | "chapter"
    | "cite-as"
    | "collection"
    | "contents"
    | "convertedFrom"
    | "copyright"
    | "create-form"
    | "current"
    | "describedby"
    | "describes"
    | "disclosure"
    | "dns-prefetch"
    | "duplicate"
    | "edit"
    | "edit-form"
    | "edit-media"
    | "enclosure"
    | "external"
    | "first"
    | "glossary"
    | "help"
    | "hosts"
    | "hub"
    | "icon"
    | "index"
    | "intervalAfter"
    | "intervalBefore"
    | "intervalContains"
    | "intervalDisjoint"
    | "intervalDuring"
    | "intervalEquals"
    | "intervalFinishedBy"
    | "intervalFinishes"
    | "intervalIn"
    | "intervalMeets"
    | "intervalMetBy"
    | "intervalOverlappedBy"
    | "intervalOverlaps"
    | "intervalStartedBy"
    | "intervalStarts"
    | "item"
    | "last"
    | "latest-version"
    | "license"
    | "linkset"
    | "lrdd"
    | "manifest"
    | "mask-icon"
    | "media-feed"
    | "memento"
    | "micropub"
    | "modulepreload"
    | "monitor"
    | "monitor-group"
    | "next"
    | "next-archive"
    | "nofollow"
    | "noopener"
    | "noreferrer"
    | "opener"
    | "openid2.local_id"
    | "openid2.provider"
    | "original"
    | "P3Pv1"
    | "payment"
    | "pingback"
    | "preconnect"
    | "predecessor-version"
    | "prefetch"
    | "preload"
    | "prerender"
    | "prev"
    | "prev-archive"
    | "preview"
    | "previous"
    | "privacy-policy"
    | "profile"
    | "publication"
    | "related"
    | "replies"
    | "restconf"
    | "ruleinput"
    | "search"
    | "section"
    | "self"
    | "service"
    | "service-desc"
    | "service-doc"
    | "service-meta"
    | "sponsored"
    | "start"
    | "status"
    | "stylesheet"
    | "subsection"
    | "successor-version"
    | "sunset"
    | "tag"
    | "terms-of-service"
    | "timegate"
    | "timemap"
    | "type"
    | "ugc"
    | "up"
    | "version-history"
    | "via"
    | "webmention"
    | "working-copy"
    | "working-copy-of";
  /** Extensions for relation */
  _relation?: Element;
  /** The reference details for the link. */
  url: string;
  /** Extensions for url */
  _url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Bundle_LinkSchemaInternal = BackboneElementSchemaInternal.extend({
  relation: z.enum([
    "about",
    "acl",
    "alternate",
    "amphtml",
    "appendix",
    "apple-touch-icon",
    "apple-touch-startup-image",
    "archives",
    "author",
    "blocked-by",
    "bookmark",
    "canonical",
    "chapter",
    "cite-as",
    "collection",
    "contents",
    "convertedFrom",
    "copyright",
    "create-form",
    "current",
    "describedby",
    "describes",
    "disclosure",
    "dns-prefetch",
    "duplicate",
    "edit",
    "edit-form",
    "edit-media",
    "enclosure",
    "external",
    "first",
    "glossary",
    "help",
    "hosts",
    "hub",
    "icon",
    "index",
    "intervalAfter",
    "intervalBefore",
    "intervalContains",
    "intervalDisjoint",
    "intervalDuring",
    "intervalEquals",
    "intervalFinishedBy",
    "intervalFinishes",
    "intervalIn",
    "intervalMeets",
    "intervalMetBy",
    "intervalOverlappedBy",
    "intervalOverlaps",
    "intervalStartedBy",
    "intervalStarts",
    "item",
    "last",
    "latest-version",
    "license",
    "linkset",
    "lrdd",
    "manifest",
    "mask-icon",
    "media-feed",
    "memento",
    "micropub",
    "modulepreload",
    "monitor",
    "monitor-group",
    "next",
    "next-archive",
    "nofollow",
    "noopener",
    "noreferrer",
    "opener",
    "openid2.local_id",
    "openid2.provider",
    "original",
    "P3Pv1",
    "payment",
    "pingback",
    "preconnect",
    "predecessor-version",
    "prefetch",
    "preload",
    "prerender",
    "prev",
    "prev-archive",
    "preview",
    "previous",
    "privacy-policy",
    "profile",
    "publication",
    "related",
    "replies",
    "restconf",
    "ruleinput",
    "search",
    "section",
    "self",
    "service",
    "service-desc",
    "service-doc",
    "service-meta",
    "sponsored",
    "start",
    "status",
    "stylesheet",
    "subsection",
    "successor-version",
    "sunset",
    "tag",
    "terms-of-service",
    "timegate",
    "timemap",
    "type",
    "ugc",
    "up",
    "version-history",
    "via",
    "webmention",
    "working-copy",
    "working-copy-of",
  ]),
  _relation: z.lazy(getElementSchema).optional(),
  url: fhirUri(),
  _url: z.lazy(getElementSchema).optional(),
}).strict();

export const Bundle_LinkSchema =
  Bundle_LinkSchemaInternal as z.ZodType<Bundle_Link>;
