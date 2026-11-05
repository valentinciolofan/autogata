/** IMPORTANT: completează și verifică aceste valori înainte de publicare. */
export const legal = {
  brand: 'autoGata',
  website: 'https://autogata.ro',
  updatedAt: '23 octombrie 2026',
  operator: 'CIOLOFAN VALENTIN-CATALIN',
  address: 'ALEEA CETATUIA NR.4, BLOC M22',
  email: 'contact@autogata.ro',
  phone: '0752807961',
  provider: 'Vercel Inc.',
  processingLocation: 'Germania (Frankfurt) pentru generarea PDF-urilor; ' +
    'infrastructură globală pentru livrare și servicii auxiliare',
  transferDetails:
    'Pot exista transferuri internaționale prin ' +
    'furnizorul de hosting și subcontractanții săi. ' +
    'Detaliile și garanțiile aplicabile vor fi ' +
    'stabilite conform acordului de prelucrare a datelor.',
  technicalLogsRetention:
    'Logurile runtime Vercel: 1 oră pe planul Hobby; ' +
    'alte loguri tehnice conform serviciilor activate.',
  emailRetention:
    '[DE STABILIT ÎN FUNCȚIE DE GESTIONAREA EMAILURILOR]',
  cookiesDetails:
    '[DE VERIFICAT DUPĂ CONFIGURAREA FINALĂ A SITE-ULUI]',
  thirdPartyDataLegalBasis:
    '[DE STABILIT ÎN URMA ANALIZEI TEMEIULUI JURIDIC]',
  pdfGeneration: 'server-memory' as const,
};

export const missingLegalSettings = Object.entries(legal)
  .filter(([, value]) => typeof value === 'string' && value.includes('['))
  .map(([key]) => key);