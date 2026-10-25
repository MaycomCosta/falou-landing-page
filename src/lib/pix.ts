/**
 * Pix "copia e cola" code (BR Code, the EMV format from Banco Central) for a fixed amount.
 * Any Brazilian bank app can scan it as a QR code or paste it as text.
 */

function field(id: string, value: string): string {
  return `${id}${value.length.toString().padStart(2, '0')}${value}`
}

/** CRC16-CCITT (poly 0x1021, start 0xFFFF), as the BR Code spec requires. */
export function crc16(text: string): string {
  let crc = 0xffff
  for (const byte of new TextEncoder().encode(text)) {
    crc ^= byte << 8
    for (let i = 0; i < 8; i++) crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff
  }
  return crc.toString(16).toUpperCase().padStart(4, '0')
}

/** Banks expect plain uppercase ASCII for the name and city. */
function plain(text: string, max: number): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Za-z0-9 ]/g, '')
    .toUpperCase()
    .slice(0, max)
}

export interface PixCharge {
  /** Receiver's Pix key: email, phone (+55…), CPF/CNPJ digits or random key. */
  key: string
  /** Receiver's name as registered at the bank. */
  name: string
  city: string
  /** In reais, e.g. 49 or 49.9. */
  amount: number
  /** Shown on the buyer's statement, e.g. "FALOU". Letters and digits only. */
  reference?: string
}

export function pixCode({ key, name, city, amount, reference = '***' }: PixCharge): string {
  const body =
    field('00', '01') +
    field('26', field('00', 'br.gov.bcb.pix') + field('01', key.trim())) +
    field('52', '0000') +
    field('53', '986') +
    field('54', amount.toFixed(2)) +
    field('58', 'BR') +
    field('59', plain(name, 25)) +
    field('60', plain(city, 15)) +
    field('62', field('05', reference.replace(/[^A-Za-z0-9*]/g, '').slice(0, 25) || '***')) +
    '6304'
  return body + crc16(body)
}
