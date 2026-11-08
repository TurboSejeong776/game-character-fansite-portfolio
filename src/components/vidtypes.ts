export const labels = [
  'Spectro',
  'Havoc',
  'Aero',
  'Electro',
  'No Hit',
  'Solo',
] as const;

export type Label = (typeof labels)[number];
