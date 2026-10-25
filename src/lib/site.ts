/** Things that change when Falou ships publicly: set them in one place. */
export const site = {
  /**
   * Direct link to the .dmg. "latest/download" always points at the newest GitHub Release
   * in the public falou-releases repo, so a new release needs no change here. Empty = "coming soon".
   */
  downloadUrl: 'https://github.com/MaycomCosta/falou-releases/releases/latest/download/Falou-arm64.dmg',
  version: '0.1',
  trialDays: 7,
  /**
   * Buying: a Pix payment, then a license key by email (made with `npm run license` in the app
   * repo). Keep price, Pix key and email in sync with src/shared/purchase.ts there.
   * While pix.key is empty the page says purchases open soon.
   */
  price: { amount: 0, label: '' },
  pix: { key: '', name: '', city: '' },
  email: '',
}

export const canBuy = (): boolean => site.pix.key !== '' && site.price.amount > 0 && site.email !== ''
