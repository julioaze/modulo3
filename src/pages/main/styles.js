import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding * 2,
  },
  title: {
    fontSize: 32,
    color: colors.white,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: colors.white,
    lineHeight: 20,
    marginTop: metrics.baseMargin / 2,
    textAlign: 'center',
  },
  form: {
    marginTop: metrics.baseMargin * 2,
    alignSelf: 'stretch',
  },
  error: {
    fontWeight: 'bold',
    color: colors.danger,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin,
  },
  loading: {
    color: colors.darkTransparent,
  },
  input: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: metrics.borderRadius,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    height: 50,
    backgroundColor: colors.secundary,
    borderRadius: metrics.borderRadius,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },
  buttonText: {
    color: colors.darkTransparent,
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    paddingBottom: metrics.basePadding,
  },
  footerLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
