/**
 * Verifies the signature of the given body using the provided signature coded in sha1 or sha256.
 *
 * @param {string} body                 - The body to be verified.
 * @param {string} signature            - The signature to be checked.
 * @return {boolean}                    - True if the signature is valid, false otherwise.
 */
exports.verifySignature = function (body, signature) {
    let verifierToken = config.get("webhooksVerifierToken");

    if (verifierToken && signature256 &&
        !sys.utils.crypto.verifySignatureWithHmac(body, signature, verifierToken, "HmacSHA256")) {
        return false;
    }

    return true;
};
