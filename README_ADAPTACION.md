# Overlay K8s para tu MVP (React + Flask + Neo4j)

Coloca el contenido de este ZIP **encima de tu carpeta `mvp/`** (manteniendo la estructura).
Incluye:
- `backend/app.py` **parcheado** (lee `NEO4J_URI`, `NEO4J_USER`, `NEO4J_PASSWORD`)
- `backend/Dockerfile.k8s` (Gunicorn)
- `frontend/Dockerfile.k8s` y `frontend/nginx.conf`
- `charts/geekstore/*` (Helm: backend, frontend, neo4j, envoy, HPA, Secret, PVC)

## Build imágenes dentro de Minikube

```powershell
& minikube -p minikube docker-env --shell powershell | Invoke-Expression

cd backend
docker build -t mvp/backend:0.1.0 -f Dockerfile.k8s .

cd ../frontend
docker build -t mvp/frontend:0.1.0 -f Dockerfile.k8s .
```

## Deploy con Helm

```powershell
helm upgrade --install geekstore charts/geekstore -n geek --create-namespace
kubectl get pods -n geek -w
kubectl -n geek port-forward svc/envoy 18080:8080
Start-Process http://localhost:18080/
```

## Credenciales por defecto (cámbialas)

Secret `neo4j-auth`:
- `NEO4J_USER=neo4j`
- `NEO4J_PASSWORD=password`
- `NEO4J_AUTH=neo4j/password`

## Notas del PDF
- **HPA** ya activo para backend y frontend (CPU).
- **Persistencia**: PVC en Neo4j (StatefulSet).
- **Gateway**: Envoy con rutas `/api/*` (backend) y `/` (frontend).
- **Prometheus/Harbor/Seguridad**: puedes añadir kube-prometheus-stack, subir imágenes a Harbor y configurar RBAC/NetworkPolicies si te lo piden para el informe.
