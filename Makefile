restart:
	@echo "Restarting Docker Compose services..."
	@docker compose down --volumes --remove-orphans
	@docker compose build --no-cache
	@docker compose up -d --remove-orphans
	@echo "Services have been restarted."
