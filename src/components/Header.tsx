import { colors, spacing, fontSize } from '../theme';

const Header = () => {
  return (
    <header style={{
      backgroundColor: colors.primary,
      padding: `${spacing.lg} ${spacing.md}`,
      textAlign: 'center',
      borderRadius: `0 0 16px 16px`,
      marginBottom: spacing.md,
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
    }}>
      <h1 style={{
        color: 'white',
        margin: 0,
        fontSize: fontSize.xl,
        fontWeight: 'bold',
        letterSpacing: '0.5px'
      }}>
        Unit Convertor
      </h1>
    </header>
  );
};

export default Header;