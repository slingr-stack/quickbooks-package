/**
 * Verifies the signature of the given body using the provided signature coded in sha1 or sha256.
 *
 * @param {string} body                 - The body to be verified.
 * @param {string} signature            - The signature to be checked.
 * @return {boolean}                    - True if the signature is valid, false otherwise.
 */
exports.verifySignature = function (body, signature) {
    let verifierToken = config.get("webhooksVerifierToken");
    if (verifierToken) {
        let signedBody = sys.utils.crypto.hashHmac(body, verifierToken, 'HmacSHA256', 'BASE64');
        return signedBody === signature;
    } else {
        return true;
    }
};
