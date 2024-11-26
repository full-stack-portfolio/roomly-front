// interface: admin request dto //

export interface AdminRequestDTO {
  //! 요청 일자 데이터 타입 어떻게 해야 할지 알아보기(일단 string으로 해놓음)
  requestDate: string;
  hostId: string; // 호스트 아이디(pk)
  accommodationName: string; // 숙소 이름
  status: 'pending' | 'approved'; // 승인 상태
}
