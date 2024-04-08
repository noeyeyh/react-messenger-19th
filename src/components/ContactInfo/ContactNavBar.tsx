import styled from 'styled-components';
import TopNavBar from '../TopNavBar/TopNavBar';
import Left from '../../assets/img/left.svg';

export default function ContactNavBar() {
  return <TopNavBar leftImgSrc={Left} leftText="Dain Park" rightText="Edit" />;
}
