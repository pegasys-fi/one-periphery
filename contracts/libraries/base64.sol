// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Base64 {
    bytes internal constant TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function encode(bytes memory data) internal pure returns (string memory) {
        uint256 len = data.length;
        if (len == 0) return "";

        // multiply by 4/3 rounded up
        uint256 encodedLen = 4 * ((len + 2) / 3);

        // Add some extra buffer at the end
        bytes memory result = new bytes(encodedLen + 32);

        bytes memory table = TABLE;

        assembly {
            let tablePtr := add(table, 1)
            let resultPtr := add(result, 32)

            for {
                let i := 0
            } lt(i, len) {

            } {
                i := add(i, 3)
                let input := and(mload(add(data, i)), 0xFFFFFF)

                let out := mload(add(tablePtr, and(shr(18, input), 0x3F)))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(12, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(shr(6, input), 0x3F))), 0xFF))
                out := shl(8, out)
                out := add(out, and(mload(add(tablePtr, and(input, 0x3F))), 0xFF))

                // Use a jump table to avoid padding with null bytes
                switch add(i, 3)
                case len {
                    out := shl(16, out)
                    mstore(add(resultPtr, mul(div(i, 3), 4)), out)
                }
                case add(len, 1) {
                    out := shl(8, out)
                    mstore(add(resultPtr, mul(div(i, 3), 4)), out)
                }
                default {
                    mstore(add(resultPtr, mul(div(i, 3), 4)), out)
                }
            }

            mstore(result, encodedLen)
        }

        return string(result);
    }
}
