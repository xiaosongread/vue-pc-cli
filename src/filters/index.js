import store from '@/store'
export function dictT(status, key) {
  const mapStatus = store.state.dictData
   if(mapStatus[key]){
      let selectItem = mapStatus[key].filter(function(item, index){
        return item.dictCode == status
      })[0].dictName
      return selectItem
   }else{
     return ''
   }
 }