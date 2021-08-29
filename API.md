# REST API
HTTP 요청 리스트(ajax)
### GET /workspaces
- 내 워크스페이스 목록을 가져옴
- return: IWorkspace[]
### POST /workspaces
- 워크스페이스를 생성함
- body: { workspace: string(이름), url: string(주소) }
- return: IWorkspace