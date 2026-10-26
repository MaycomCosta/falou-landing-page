/** Things that change when Falou ships publicly: set them in one place. */
export const site = {
  /**
   * Direct link to the .dmg. "latest/download" always points at the newest GitHub Release
   * of this (public) website repo, so a new release needs no change here. Empty = "coming soon".
   */
  downloadUrl: 'https://github.com/MaycomCosta/falou-landing-page/releases/latest/download/Falou-arm64.dmg',
  version: '0.2',
  trialDays: 7,
  /**
   * Buying: a Pix payment, then a license key by email (made with `npm run license` in the app
   * repo). Keep price, Pix key and email in sync with src/shared/purchase.ts there.
   * While pix.key is empty the page says purchases open soon.
   * Pay what you want: the price is a suggestion and the Pix code carries no amount.
   */
  price: { amount: 15, label: 'R$ 15' },
  /** Phone keys are written +55 DDD number. The name is the account holder's, as at the bank. */
  pix: { key: '+5511970160574', name: 'Maycom Costa', city: 'Sao Paulo' },
  email: 'maycom19costa@gmail.com',
}

export const canBuy = (): boolean => site.pix.key !== '' && site.price.amount > 0 && site.email !== ''
