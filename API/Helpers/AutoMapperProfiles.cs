using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>();
            CreateMap<Payment, PaymentToReturnDto>()
           .ForMember(dest => dest.VendorName, opt => opt.MapFrom(src => src.Vendor.Name))
           .ForMember(dest => dest.ProjectName, opt => opt.MapFrom(src => src.Project != null ? src.Project.Name : null))
           .ForMember(dest => dest.CorporationName, opt => opt.MapFrom(src => src.Corporation.Name));


        }
    }
}