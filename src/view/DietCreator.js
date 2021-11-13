import React from 'react'
import { ReusableViewWrapper } from '../components/Reusable'
import Input from "../components/Input";

import { ReactComponent as UserSVG } from './../assets/user.svg';
import { ReactComponent as passSVG } from './../assets/pass.svg';
import SearchInput from '../components/SearchInput';
import Select from '../components/Select';
import Pagination from '../components/Pagination';

const DietCreator = () => {
  return (
    <ReusableViewWrapper>
      DietCreator
      <Input placeholder="inputs" icon={UserSVG} width="360px" />  
      <Input placeholder="inputs" icon={passSVG} />  
      <Input placeholder="inputs" />  

      <SearchInput />

      <Select 
        data={[
          "item1", 
          "item2", 
          "item3", 
          "item4", 
          "item5"
        ]}
      />  

      <Pagination/>
    </ReusableViewWrapper>
  )
}

export default DietCreator
