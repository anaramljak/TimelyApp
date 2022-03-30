package timely.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import timely.model.TimeModel;

@Repository
public interface TimeRepository extends JpaRepository<TimeModel, Long> {
}
