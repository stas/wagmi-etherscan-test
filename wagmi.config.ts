import { defineConfig } from '@wagmi/cli'
import { etherscan } from '@wagmi/cli/plugins'
import { optimism } from "viem/chains";

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    etherscan({
      apiKey: '5IDYJR3C8RXA1C57R6UBSW2UNYS4J4YNJN',
      chainId: optimism.id,
      contracts: [
        {
          name: 'Voter',
          address: {
            [optimism.id]: '0x41C914ee0c7E1A5edCD0295623e6dC557B5aBf3C',
          },
        },
      ],
    }),
  ],
})
