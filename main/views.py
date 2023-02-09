from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from .serializers import MemberSerializer, DoneListSerializer, DoneContentSerializer, LikeSerializer, LikeContentSerializer, CommentSerializer, DMSerializer, DMsendSerializer, DMreceiveSerializer
from .models import Member, DoneList, Like, Comment, DM
from rest_framework import status, response
from django.shortcuts import get_list_or_404


class MemberViewset(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

member_list = MemberViewset.as_view({
    'get': 'list',
    'post': 'create'
})

member_detail = MemberViewset.as_view({
        'get': 'retrieve',
        'patch': 'partial_update',
    })

class DoneListViewset(viewsets.ModelViewSet):
    queryset = DoneList.objects.all()
    serializer_class = DoneListSerializer

donelist_list = DoneListViewset.as_view({
    'get': 'list',
    'post': 'create'

})

donelist_detail = DoneListViewset.as_view({
    'get': 'retrieve',      #싱글 object
    'patch': 'partial_update',
    'delete': 'destroy'

})

class DoneContentViewset(viewsets.ModelViewSet) :
    queryset = DoneList.objects.all()
    serializer_class = DoneContentSerializer
    lookup_field = "userId"
    

donecontent_list = DoneContentViewset.as_view({
    'get': 'list',

})



class LikeViewset(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

like_list = LikeViewset.as_view({
    'get': 'list',
    'post': 'create'
})

like_detail = LikeViewset.as_view({
    'get': 'retrieve',
    'delete': 'destroy'
})

class LikeContentViewset(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeContentSerializer

likecontent_list = LikeContentViewset.as_view({
    'get' : 'list'
})


class CommentViewset(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class= CommentSerializer

comment_list = CommentViewset.as_view({
    'get': 'list',
    'post': 'create'
})

comment_detail = CommentViewset.as_view({
    'get': 'retrieve',      
    'patch': 'partial_update',
    'delete': 'destroy'
})

class DMViewset(viewsets.ModelViewSet):
    queryset = DM.objects.all()
    serializer_class = DMSerializer

DM_list = DMViewset.as_view({
    'get': 'list',
    'post': 'create'
})
DM_detail = DMViewset.as_view({
    'get': 'retrieve',      
})


class DMsendViewset(viewsets.ModelViewSet) :
    queryset = DM.objects.all()
    serializer_class = DMsendSerializer
    


DMsend_list = DMsendViewset.as_view({
    'get': 'list'
})

DMsend_detail = DMsendViewset.as_view({
    'get': 'retrieve'
})

class DMreceiveViewset(viewsets.ModelViewSet):
    queryset = DM.objects.all()
    serializer_class = DMreceiveSerializer

DMreceive_list = DMreceiveViewset.as_view({
    'get': 'list'

})

DMreceive_detail = DMreceiveViewset.as_view({
    'get': 'retrieve'
})
    

# # 모든 댓글 가져오기
# @api_view(['GET', 'POST'])
# def comment_list(request):
#     comments = get_list_or_404(Comment)
#     if request.method == 'GET':
#         serializer = CommentSerializer(comments, many=True)
#         return response(serializer.data)
#     else:
#         serializer = CommentSerializer(instance=comment, data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return response(serializer.data)


# # 특정 댓글 가져오기 / 댓글 수정 / 댓글 삭제
# @api_view(['GET', 'PATCH', 'DELETE'])
# def comment_detail(request, comment_pk):
#     comment = get_list_or_404(Comment, pk=comment_pk)
#     if request.method == 'GET':
#         serializer = CommentSerializer(comment)
#         return response(serializer.data)
#     elif request.method == 'PATCH':
#         serializer = CommentSerializer(instance=comment, data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return response(serializer.data)
#     elif request.method == 'DELETE':
#         comment.delete()
#         data = {
#             'delete' : f'댓글 {comment_pk}번이 삭제되었습니다.'
#         }
#         return response(data, status=status.HTTP_204_NO_CONTENT)

# # 댓글 추가
# @api_view(['POST'])
# def comment_create(request, donelist_pk):
#     donelist = get_list_or_404(DoneList, pk=donelist_pk)
#     serializer = CommentSerializer(data=request.data)
#     if serializer.is_valid(raise_exception=True):
#         serializer.save(donelist=donelist)
#         return response(serializer.data, status=status.HTTP_201_CREATED)