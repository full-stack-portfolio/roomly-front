import axios from "axios";
import { AdminRequestDTO } from "./dto/request";

import HostEnrollmentResponseDetailDto from "./dto/response/HostEnrollmentResponseDetailDto";
import HostEnrollmentResponseDto from "./dto/response/hostenrollmentapproval";

// function: admin 호스트 계정 승인 요청 시 호스트 정보 가져오기 API 함수 //
const AdminHost_URL = 'http://localhost:3000/adminHost';

export const fetchAdminHostApprovalRequests = async (): Promise<HostEnrollmentResponseDto[]> => {
    try {
        const response = await axios.get<HostEnrollmentResponseDto[]>(AdminHost_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching admin approval requests:', error);
        throw error; // 에러를 던져서 상위 컴포넌트에서 처리할 수 있게 함
    }
};

// function: 모달창 오픈 시 호스트 상세 정보 가져오기 API 함수 //
const AdminHostModal_URL = 'http://localhost:3000/api/adminHost/${hostId}';

export const fetchHostApprovaRequestDetail = async (hostId: string): Promise<HostEnrollmentResponseDetailDto> => {
  const response = await axios.get(`${AdminHostModal_URL}/${hostId}`);
  return response.data;
};

// function: 관리자가 승인 or 거절 버튼 클릭 시 업데이트 정보 보내주기 API 함수 //
const AdminHostEnrollmentStatusUpdate_URL = 'http://localhost:3000/api/admin/host-requests/${hostId}';

const AdminHostEnrollmentStatusUpdate = async (hostId: string, status: "pending" | "approved" | "rejected") => {
  try {
    const response = await axios.put(`/api/host/${hostId}/status`, { status });
    console.log("Status updated successfully:", response.data);
  } catch (error) {
    console.error("Failed to update status:", error);
  }
};



// function: admin 호스트 숙소 승인 요청 시 호스트 정보 가져오기 API 함수 //
const AdminAccommodation_URL = 'http://localhost:3000/admin';

export const fetchAdminAccommodationApprovalRequests = async (): Promise<AdminRequestDTO[]> => {
  try {
    const response = await axios.get<AdminRequestDTO[]>(AdminAccommodation_URL);
    return response.data; // 응답으로 받은 데이터를 반환
  } catch (error) {
    console.error('요청하신 정보를 불러올 수 없습니다.', error);
    throw error; // 에러를 호출한 곳에서 핸들링할 수 있도록 던짐
  }
};

