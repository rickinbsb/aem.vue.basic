import CustomClasses from './components/CustomClasses/CustomClasses'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import NotFoundButton from './components/404Button/404Button'
import NotFoundFooter from './components/404Footer/404Footer'
import NotFoundHeader from './components/404Header/404Header'
import NotFoundText from './components/404Text/404Text'
import NotFoundTitle from './components/404Title/404Title'
import NotFoundContainer from './components/404Container/404Container'

import HomeHeader from './components/containers/HomeHeader'
import HomeContainer from './components/containers/HomeContainer'
import HomeFooter from './components/containers/HomeFooter'

import LoginContainer from './components/containers/LoginContainer'

import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)

// 404 Page Components Mapping
MapTo('vue/components/404-button')(NotFoundButton)
MapTo('vue/components/404-footer')(NotFoundFooter)
MapTo('vue/components/404-header')(NotFoundHeader)
MapTo('vue/components/404-text')(NotFoundText)
MapTo('vue/components/404-title')(NotFoundTitle)
MapTo('vue/components/404-container')(NotFoundContainer)

// Home Page Components Mapping
MapTo('vue/components/home-header')(HomeHeader)
MapTo('vue/components/home-container')(HomeContainer)
MapTo('vue/components/home-footer')(HomeFooter)

// Login Page Components Mapping
MapTo('vue/components/login-container')(LoginContainer)
