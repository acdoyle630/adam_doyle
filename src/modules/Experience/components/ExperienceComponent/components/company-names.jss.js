import themes from '../../../../../themes/themes'
import colors from '../../../../../themes/colors'

const style = {
    companyName: {
        ...themes.componentSubHeader,
        marginBottom: '20px',
        cursor: 'pointer'
   },
   selectedCompany: {
    ...themes.componentSubHeader,
    marginBottom: '20px',
    color: colors.third,
    cursor: 'pointer'
   }
}

export default style 