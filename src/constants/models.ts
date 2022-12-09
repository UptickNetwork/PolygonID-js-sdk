export const AuthBJJCredentialHash = '013fd3f623559d850fb5b02ff012d0e2';
export const AuthBJJCredentialSchemJsonURL =
  'https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/auth-v1.json';
export const AuthBJJCredential = 'AuthBJJCredential';
export const AuthBJJCredentialSchemaJson = `{"$schema":"http://json-schema.org/draft-07/schema#","$metadata":{"uris":{"jsonLdContext":"https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/auth-v2.json-ld","jsonSchema":"https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json/auth-v1.json"},"serialization":{"indexDataSlotA":"x","indexDataSlotB":"y"}},"type":"object","required":["@context","id","type","issuanceDate","credentialSubject","credentialSchema","credentialStatus","issuer"],"properties":{"@context":{"type":["string","array","object"]},"id":{"type":"string"},"type":{"type":["string","array"],"items":{"type":"string"}},"issuer":{"type":["string","object"],"format":"uri","required":["id"],"properties":{"id":{"type":"string","format":"uri"}}},"issuanceDate":{"type":"string","format":"date-time"},"expirationDate":{"type":"string","format":"date-time"},"credentialSchema":{"type":"object","required":["id","type"],"properties":{"id":{"type":"string","format":"uri"},"type":{"type":"string"}}},"subjectPosition":{"type":"string","enum":["none","index","value"]},"merklizationRootPosition":{"type":"string","enum":["none","index","value"]},"revNonce":{"type":"integer"},"version":{"type":"integer"},"updatable":{"type":"boolean"},"credentialSubject":{"type":"object","required":["x","y"],"properties":{"id":{"title":"Credential Subject ID","type":"string","format":"uri"},"x":{"type":"string"},"y":{"type":"string"}}}}}`;
